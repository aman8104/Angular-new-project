export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
  // other firebase properties...
}

export interface Environment {
  production: boolean;
  firebase: FirebaseConfig;
  apiUrl: string;
  // other environment properties...
}
