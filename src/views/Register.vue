<template>
    <div class="main-container">
      <form @submit.prevent="onSubmit" novalidate>
        <div class="box-container">
          <h2 class="heading">Create Your Account</h2>
          <!-- <div class="form-fields">
            <input name="name" type="text" placeholder="Full name" v-model="user.name">
            <small class="error" v-for="(error, index) of v$.user.name.$errors" :key="index">
              {{ formatModalName(error.$property) }} {{formatMessage(error.$message)}}
            </small>
          </div> -->
          <div class="form-fields">
            <input name="email" type="text" placeholder="Email Address" v-model="user.email">
            <small class="error" v-for="(error, index) of v$.user.email.$errors" :key="index">
              {{ formatModalName(error.$property) }} {{formatMessage(error.$message)}}
            </small>
          </div>
          <div class="form-fields">
            <input name="password" type="password" placeholder="Password" v-model="user.password" autocomplete="new-password">
            <small class="error" v-for="(error, index) of v$.user.password.$errors" :key="index">
              {{ formatModalName(error.$property) }} {{formatMessage(error.$message)}}
            </small>
          </div>
          <!-- <div class="form-fields">
            <input name="mobile" type="text" placeholder="Mobile" v-model="user.mobile" v-on:input="formatMobileNumber(user.mobile)" >
            <small class="error" v-for="(error, index) of v$.user.mobile.$errors" :key="index">
              {{ formatModalName(error.$property) }} {{formatMessage(error.$message)}}
            </small>
          </div> -->
          <div class="form-fields">
            <button class="createaccount" type="submit">
              Create your account
            </button>
          </div>
          <div>
            <p class="center">By signing up you agree to the <a href="#">Terms of Service</a>.</p>
          </div>
        </div>
      </form>
      <div class="footer">
        <p>Already have an account? <a href="/login"> Login</a></p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  import useVuelidate from '@vuelidate/core'
  import { email, required, minLength } from '@vuelidate/validators'
  import { capitalizeFirstLetter, lowercaseFirstLetter } from  '@/config/Utils'
  import router from '@/router'
  
  export default {
    name: 'register',
    setup() {
      return { v$: useVuelidate() }
    },
    data() {
      return {
        user : {
          email: '',
          password: '',
        }
      }
    },
    validations() {
      return {
        user: {
          email: { email, required },
          password: { required, minLength: minLength(6) },
        }
      }
    },
    methods: {
      ...mapActions('user', ['userLogin']),
      formatModalName(string) {
        return capitalizeFirstLetter(string)
      },
      formatMessage(string) {
        return lowercaseFirstLetter(string)
      },
    //   formatMobileNumber (phone) {
    //     this.user.mobile = formatPhoneNumber(phone)
    //   },
      onSubmit() {
        this.v$.$touch()
        if (this.v$.$error) return
        this.userLogin(this.user)
        router.push('/home')
      }
    }
  }
  </script>
  
  <style>
  </style>
  