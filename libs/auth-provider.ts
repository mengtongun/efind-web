import { supabase } from './supabase';

const authProvider = {
  login: async ({ email, password }) => {
    console.log('auto', email, password);
    // return Promise.resolve();
    const { user, error } = await supabase.auth.signIn({
      email: email,
      password,
    });

    if (error) {
      return Promise.reject(error);
    }

    if (user) {
      return Promise.resolve(user);
    }
  },
  logout: async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return Promise.reject(error);
    }

    return Promise.resolve('/');
  },
  checkError: () => Promise.resolve(),
  checkAuth: () => {
    const session = supabase.auth.session();

    if (session) {
      return Promise.resolve(true);
    }

    return Promise.reject();
  },
  getPermissions: async () => {
    const user = supabase.auth.user();

    if (user) {
      return Promise.resolve(user.role);
    }
  },
  getUserIdentity: async () => {
    const user = supabase.auth.user();

    if (user) {
      return Promise.resolve({
        ...user,
        name: user.email,
      });
    }
  },
};

export default authProvider;
