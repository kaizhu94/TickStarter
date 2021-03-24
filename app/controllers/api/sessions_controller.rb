class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
          params[:user][:email],
          params[:user][:password]
          )
    
        if @user
          login!(@user)
          render "api/users/show"
        else
          render json: ["The email address and password you entered do not match."], status: 401
        end
      end
    
      def destroy
        if current_user
          logout!
          render json: ["You have logged out!"]
        else
          render json: ["No one is logged in"], status: 404
        end
      end
    
      private
    
      def user_params
        params.require(:user).permit(:email, :password)
      end
end
