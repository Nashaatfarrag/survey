<template>
  <v-container
    ><v-row v-if="questions"
      ><v-col>
        <v-stepper v-if="info != {}" v-model="e6" vertical>
          <div v-for="(i, index) in questions" :key="i.title">
            <v-stepper-step :complete="e6 > index" :step="index + 1">
              {{ i.Title }}
            </v-stepper-step>

            <v-stepper-content :step="index + 1">
              <v-card
                rounded="1"
                color="blue lighten-5"
                class="mb-12"
                height="200px"
              >
                <v-card-title>{{ i.questionText }}</v-card-title>
                <v-card-text>
                  <v-text-field
                    solo
                    :label="i.Title + ' answer'"
                    v-model="i.answer"
                  ></v-text-field>
                </v-card-text>
              </v-card>
              <v-btn color="primary" @click="e6 = index + 2"> Continue </v-btn>
            </v-stepper-content>
          </div>

          <v-stepper-step step="7"> Info </v-stepper-step>
          <v-stepper-content step="7">
            <v-card rounded color="blue lighten-5" class="mb-12">
              <v-container>
                <v-form ref="ownerForm">
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        required
                        solo
                        v-model="info.FirstName"
                        label="First Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        required
                        solo
                        v-model="info.LastName"
                        label="Last Name"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        required
                        solo
                        type="number"
                        v-model="info.Phone"
                        label="Phone"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        required
                        solo
                        v-model="info.CompanyName"
                        label="CompanyName"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        required
                        solo
                        type="Email"
                        v-model="info.Email"
                        label="Email"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        required
                        solo
                        v-model="info.Speciality"
                        label="Speciality"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        required
                        solo
                        v-model="info.Country"
                        label="Country"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-switch
                        v-model="info.Check1"
                        :label="`Flag 1`"
                      ></v-switch
                    ></v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-switch
                        v-model="info.Check2"
                        :label="`Flag 2`"
                      ></v-switch
                    ></v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-card>
            <v-btn color="primary" @click="Submit"> Sumit </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col></v-row
    >
    <v-row v-else>
      <v-col>Thank You</v-col>
    </v-row></v-container
  >
</template>

<script>
const axios = require("axios");
export default {
  methods: {
    Submit() {
      let reqBody = { ...this.info, ...this.questions };
      //change route after /api/* only 
      axios
        .post("/api/assessment/userCreate", reqBody)
        .then((res) => {
          console.log(res);
          this.questions = false;
          this.info = {};
        })
        .catch((err) => {
          console.log(err);
          this.questions = false;
          this.info = {};
        });
    },
  },
  data() {
    return {
      info: {
        FirstName: "",
        LastName: "",
        Phone: "",
        Email: "",
        CompanyName: "",
        Country: "",
        Speciality: "",
        Check1: false,
        Check2: false,
      },
      questions: [
        {
          Title: "Q1",
          questionText:
            "What is your organization’s average reach for one campaign? ",
          answer: "",
        },
        {
          Title: "Q2",
          questionText:
            "How many campaigns does your organization run per year? ",
          answer: "",
        },
        {
          Title: "Q3",
          questionText: "What is your organization's average transaction size?",
          answer: "",
        },
        {
          Title: "Q4",
          questionText: "What is your organization's conversion rate?",
          answer: "",
        },
        {
          Title: "Q5",
          questionText: "What  is your organization's close rate?",
          answer: "",
        },
        {
          Title: "Q6",
          questionText:
            "What is the total estimated advertising and marketing budget?",
          answer: "",
        },
      ],
      e6: 1,
    };
  },
};
</script>
