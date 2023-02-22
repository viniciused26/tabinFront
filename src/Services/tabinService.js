import { tabinAPI } from "./apiConnection";

const tabinService = {
    getMealTypes: async(token) => {
        const res = await tabinAPI.get("/restaurant/getMealTypes", {
            headers: {
              'auth-token': token,
            }
          });
        
        return res.data;
    },
    getMealsOfRestaurant: async(restaurantName) => {
        const res = await tabinAPI.get(`/meal/listRestaurantMeals/${restaurantName}`);
        
        return res.data;
    },
    newMeal: async(mealData, token) => {
        const res = await tabinAPI.post("/meal/register", mealData, {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    login: async(email, pass) => {
        const res = await tabinAPI.post("/auth/login", {
            email: email,
            password: pass
        });
        
        return res.data;
    },
    getRestaurantMeals: async(restaurant) => {
        const res = await tabinAPI.get("/meal/listRestaurantMeals" + `/${restaurant}`);

        return res.data;
    },
    getRestaurantByName: async(restaurant) => {
        const res = await tabinAPI.get("/restaurant/listByName" + `/${restaurant}`);

        return res.data;
    },
    getOwnerRestaurant: async(token) => {
        const res = await tabinAPI.get("/restaurant/listByOwner", {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    getLoggedUser: async(token) => {
        const res = await tabinAPI.get("/user/loggedUser", {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    registerUser: async(token) => {
        const res = await tabinAPI.get("/user/loggedUser", {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    getRestaurantManger: async(token) => {
        const res = await tabinAPI.get("/restaurant/getManagerInfo", {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },

}

export { tabinService };