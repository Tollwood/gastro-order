import * as express from 'express'
import { Request, Response } from 'express'
import { body, validationResult } from 'express-validator';
import Cognito from '../services/cognito.service';

class AuthController {
    public path = '/api/auth'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.post('/signup',  this.signUp)
        this.router.post('/signin',  this.signIn)
        this.router.post('/verify',  this.verify)
        this.router.post('/forgot-password',  this.forgotPassword)
        this.router.post('/confirm-password', this.confirmPassword)
    }


    // Signup new user
    signUp = (req: Request, res: Response) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(422).json({ errors: result.array() });
      }
      console.log(req.body)
      const { username, password, email } = req.body;
      let userAttr = [];
      userAttr.push({ Name: 'email', Value: email});
      
      let cognitoService = new Cognito();
      cognitoService.signUpUser(username, password, userAttr)
        .then(success => {
          success ? res.status(200).end() : res.status(400).end()
        })
    }


    // Use username and password to authenticate user
    signIn = (req: Request, res: Response) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(422).json({ errors: result.array() });
      }
      console.log(req.body);


      const { username, password } = req.body;
      let cognitoService = new Cognito();
      cognitoService.signInUser(username, password)
        .then(success => {
          success ? res.status(200).end() : res.status(400).end()
        })
    }


    // confirm signup account with code sent to email
    verify = (req: Request, res: Response) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(422).json({ errors: result.array() });
      }
      console.log(req.body)
      const { username, code } = req.body;

      let cognitoService = new Cognito();
      cognitoService.confirmSignUp(username, code)
        .then(success => {
          success ? res.status(200).end() : res.status(400).end()
        })
    }

    confirmPassword = (req: Request, res: Response) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(422).json({ errors: result.array() });
      }
      const { username, password, code } = req.body;

      let cognitoService = new Cognito();
      cognitoService.confirmNewPassword(username, password, code)
        .then(success => {
          success ? res.status(200).end(): res.status(400).end()
        })
    }

    forgotPassword = (req: Request, res: Response) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(422).json({ errors: result.array() });
      }
      const { username } = req.body;

      let cognitoService = new Cognito();
      cognitoService.forgotPassword(username)
        .then(success => {
          success ? res.status(200).end(): res.status(400).end()
        });
    }
}

export default AuthController