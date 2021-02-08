const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_BD3oBfwn5",
    "aws_user_pools_web_client_id": "3fmsof1lnvevqbukjvh9bk51dv",
    "oauth": {
      "domain":"acc-dev.auth.us-east-1.amazoncognito.com",
      "scope": [
        "phone",
        "email",
        "openid",
        "profile",
        "aws.cognito.signin.user.admin"
    ],
    "redirectSignIn": "https://portal-dev.accencio.com/session/ip",
    "redirectSignOut": "https://portal-dev.accencio.com/session/loginone",
    "responseType": "code"
    }
};


export default awsmobile;
