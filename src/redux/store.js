import { configureStore } from "@reduxjs/toolkit";
import { addBannerReducer, allBannersReducer, deleteBannerReducer } from "./reducers/bannerReducer";
import { allCategoriesReducer, newCategoryReducer } from "./reducers/categoryReducer";
import { allNurseriesReducer } from "./reducers/nurseryReducer";
import { allOrdersReducer, orderDetailsReducer } from "./reducers/orderReducer";
import { productDetailsReducer, productsReducer } from "./reducers/productReducers";
import { ordersTicketReducer } from "./reducers/ticketsReducer";
import { allUsersReducer, userReducer, verifyUserReducer } from "./reducers/userReducer";






const Store = configureStore({
  reducer: {
    products: productsReducer,
     productDetails: productDetailsReducer,
     user: userReducer,
     verifyUser : verifyUserReducer,
     addBanner : addBannerReducer,
     banners : allBannersReducer,
     deleteBanner: deleteBannerReducer,
     allOrders : allOrdersReducer,
     allNurseries : allNurseriesReducer,
     orderDetails : orderDetailsReducer,
     ordersTicket : ordersTicketReducer,
     allCategories : allCategoriesReducer,
     newCategory : newCategoryReducer,
    // categoryDetails : categoryDetailsReducer,
    // category : categoryReducer,
     allUsers : allUsersReducer,
    // userDetails : userDetailsReducer,
    // forgotPassword : forgotPasswordReducer,
    // deleteCart : deleteCartItemReducer,
    // shippingInfo : saveShippingReducer,
    // shippingDetails : shippingDetails,
    // newOrder : newOrderReducer,
    // myOrders : myOrdersReducer,
    // orderDetails : orderDetailsReducer,
    // newReview : newReviewReducer,
    // newProduct : newProductReducer,
    // product : productReducer,
    // order : orderReducer,
    // productReviews : productReviewsReducer,
    // reviews : reviewReducer,
    
    
    // newWishlist :newWishlistReducer,
    // myWishlist : myWishlistReducer,
    // deleteWishlist : deleteWishlistItemReducer,


    
    
  },

  
  
});

export default Store;
