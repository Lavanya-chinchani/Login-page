new Vue({
  el: '#app',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      rememberMe: false,
      showPassword: false
    };
  },
  computed: {
    visibilityIcon() {
      return this.showPassword ? 'visibility' : 'visibility_off';
    }
  },
  methods: {
    toggleVisibility() {
      this.showPassword = !this.showPassword;
    },
    login() {
      if (!this.username.trim() && !this.password.trim()) {
        alert('Please fill in both username/email and password fields.');
      } else if (!this.username.trim() || !this.password.trim()) {
        if (!this.username.trim()) {
          alert('Please fill in the username/email field.');
        }
        if (!this.password.trim()) {
          alert('Please fill in the password field.');
        }
      } else {
        if (this.errorMessage) {
          alert('Please correct the errors before logging in.');
        } else {
          alert('Successfully logged in!');
        }
      }
    },
    forgotPassword() {
      alert('Forgot Password?');
    },
    checkInput() {
      this.errorMessage = '';

      if (this.username.includes('@')) {
        if (!this.isValidEmail(this.username)) {
          this.errorMessage = 'Email format is not correct';
        }
      }
    },
    isValidEmail(email) {
      const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      return emailRegex.test(email);
    }
  }
});
