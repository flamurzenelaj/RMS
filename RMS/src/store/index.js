import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/compat/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsPosts: [],
    postLoaded: null,
    newsHTML: "Write your news title here...",
    newsTitle: "",
    newsPhotoName: "",
    newsPhotoFileURL: null,
    newsPhotoPreview: null,
    editPost: null,
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
    
    foods: [],
    newsPhotoNameFood: "",
    newsPhotoFileURLFood: null,

  },
  getters: {
    newsPostsFeed(state) {
      return state.newsPosts.slice(0, 2);
    },
    newsPostsCards(state) {
      return state.newsPosts.slice(2, 6);
    },

    foodList(state) {      
      return state.foods;
    }
  },
  mutations: {
    newNewsPost(state, payload) {
      state.newsHTML = payload;
    },
    updatenewsTitle(state, payload) {
      state.newsTitle = payload;
    },
    fileNameChange(state, payload) {
      state.newsPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.newsPhotoFileURL = payload;
    },
    openPhotoPreview(state) {
      state.newsPhotoPreview = !state.newsPhotoPreview;
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    setNewsState(state, payload) {
      state.newsTitle = payload.newsTitle;
      state.newsHTML = payload.newsHTML;
      state.newsPhotoFileURL = payload.newsCoverPhoto;
      state.newsPhotoName = payload.newsCoverPhotoName;
    },
    filterNewsPost(state, payload) {
      state.newsPosts = state.newsPosts.filter((post) => post.newsID !== payload);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload;
      console.log("IsAdmin: " + state.profileAdmin);
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },

    SET_FOOD(state,foods) {
      state.foods = foods;
    },
    fileNameChangeFood(state, payload) {
      state.newsPhotoNameFood = payload;
    },
    createFileURLFood(state, payload) {
      state.newsPhotoFileURLFood = payload;
    },

  },
  actions: {
    async getCurrentUser({ commit }, user) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin);
    },
    async getPost({ state }) {
      const dataBase = await db.collection("newsPosts").orderBy("date", "desc");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.newsPosts.some((post) => post.newsID === doc.id)) {
          const data = {
            newsID: doc.data().newsID,
            newsHTML: doc.data().newsHTML,
            newsCoverPhoto: doc.data().newsCoverPhoto,
            newsTitle: doc.data().newsTitle,
            newsDate: doc.data().date,
            newsCoverPhotoName: doc.data().newsCoverPhotoName,
          };
          state.newsPosts.push(data);
        }
      });
      state.postLoaded = true;
    },
    async updatePost({ commit, dispatch }, payload) {
      commit("filterNewsPost", payload);
      await dispatch("getPost");
    },
    async deletePost({ commit }, payload) {
      const getPost = await db.collection("newsPosts").doc(payload);
      await getPost.delete();
      commit("filterNewsPost", payload);
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },

    fetchFoodList({ commit }, foods) {
      commit("SET_FOOD", foods);
    }
  },
  modules: {},
});
