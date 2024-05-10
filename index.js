new Vue({
  el: '#app',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      passwordError:'',
      rememberMe: false,
      showPassword: false
    };
  },
  computed: {
    visibilityIcon() {
      return this.showPassword ? 'visibility' : 'visibility_off';
    },
    validInputs() {
      return this.username.trim() !== '' && this.password.trim() !== '' && !this.passwordError;
    }
  },
  methods: {
    toggleVisibility() {
      this.showPassword = !this.showPassword;
    },
    login() {
      if (this.errorMessage || this.passwordError) {
          alert('Please correct the errors before logging in.');
      } else {
          alert('Successfully logged in!');
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
  checkPassword() {
      if (this.password.trim() === '') {
          this.passwordError = 'Password is required';
      } else if (this.password.length < 8) {
          this.passwordError = 'Password must be at least 8 characters long';
      } else if (/\s/.test(this.password)) {
        this.passwordError = 'Password cannot contain spaces';
      }else {
      this.passwordError = '';
      }

  },
  
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
});