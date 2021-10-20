<template>
  <v-dialog v-model="dialog" max-width="400px">
    <template v-slot:activator="{ on, attrs }">
      <BtnPill input="EDIT" :attrs="attrs" :on="on" v-if="$strapi.user" />
      <BtnPill input="EDIT" v-if="$strapi.user !== null" @click="createTemplate(template)" />
    </template>
    <v-card class="rounded-xl">
      <v-card-title class="justify-center">
        <nuxt-img src="/Minilogo.png" max-width="62" class="mt-3" />
      </v-card-title>
      <v-form v-model="valid" lazy-validation>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                  outlined
                  class="rounded-xl orange-label"
                  autocomplete="username"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <div>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    outlined
                    class="rounded-xl orange-label"
                    @click:append="show1 = !show1"
                    autocomplete="current-password"
                  >
                    <template v-slot:append>
                      <ForgotDialog />
                    </template>
                  </v-text-field>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="12" class="text-center">
              <v-alert
                dense
                outlined
                type="error"
                max-width="90%"
                class="mx-4 mb-0"
                v-if="error"
              >{{ error }}</v-alert>
              <br />
              <div @click="login">
                <BtnPill input="Log in" width="221px" />
              </div>
            </v-col>
            <v-col cols="12" class="text-center">
              <a :href="api + '/connect/google'" class="text-decoration-none">
                <BtnPill
                  input="Google"
                  :bgColor="['rgb(60, 185, 128)', 'rgba(60, 190, 185, 1)']"
                  width="221px"
                />
              </a>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-form>
      <v-card-text class="text-center">
        don't have an account?
        <RegisterDialog />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  async mounted() {
    try {
      let id = '';
      if (this.$route.query.id) {
        id = this.$route.query.id;
      }
      this.template = await this.$strapi.$notes.findOne(id);
    } catch (error) {
      this.error = error;
    }
  },
  data() {
    return {
      templates: [],
      dialog: false,
      api: process.env.baseUrl,
      valid: false,
      email: "",
      password: "",
      error: null,
      emailRules: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      show1: false,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const user = await this.$strapi.login({
          identifier: this.email,
          password: this.password,
        });
        if (user !== null) {
          this.dialog = false;
          this.error = null;
          createTemplate(this.template)
        }
      } catch (error) {
        if (error.message === "Identifier or password invalid.") {
          this.error = "Email or password invalid.";
        }
      }
    },
    async createTemplate(data) {
      try {
        const newMyTemplate = await this.$strapi.create("mytemplates", {
          title: data.title,
          description: data.Description,
          price: data.price,
          users_permissions_user: this.$strapi.user,
          Editors: [],
          template: data.title,
          image: data.image,
          Stripe_id: data.Stripe_id,
          PayStatus: false,
        });
        this.$nuxt.$router.push(
          `/users/${this.$strapi.user.id}/mytemplates/${newMyTemplate.id}`
        );
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  color: gray;
  text-decoration: none;
}
</style>
