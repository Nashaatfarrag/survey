/* eslint-disable */

<template>
  <v-container
    ><v-row
      ><v-col>
        <div v-if="!questions">Thanks</div>
        <v-stepper :key="e6" v-model="e6" vertical>
          <div v-for="(i, index) in selectedQuestions" :key="i.Title">
            <v-stepper-step
              :complete="e6 > index"
              :step="selectedQuestions.length"
            >
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
                  <v-row v-for="j in i.answers" :key="j.answer">
                    <v-btn
                      width="150px"
                      class="ma-1"
                      @click="changeQuestion(j), e6++"
                    >
                      {{ j.answer }}
                    </v-btn>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-stepper-content>
          </div>
          <v-stepper-step :step="selectedQuestions.length + 1">
            Done
          </v-stepper-step>
          <v-stepper-content :step="selectedQuestions.length + 1">
            <!-- <v-card rounded color="blue lighten-5" class="mb-12">
              <v-container>
                <v-row
                  ><v-col><v-btn>Submit</v-btn></v-col></v-row
                >
              </v-container>
            </v-card> -->
            <v-btn color="primary" @click="Submit"> Sumit </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col></v-row
    ></v-container
  >
</template>

<script>
const axios = require("axios");
export default {
  methods: {
    changeQuestion(i) {
      this.updateCompoent++;
      let index = this.selectedQuestions.length - 1;
      this.selectedQuestions[index].userAnswer = i.answer;
      // eslint-disable-next-line no-unused-vars
      if (i.nextQuestion) {
        let nextIndex = this.questions
          .map(function (e) {
            return e.Title;
          })
          .indexOf(i.nextQuestion);
        this.selectedQuestions.push(this.questions[nextIndex]);
      } else {
        // this.e6++;
        this.updateCompoent++;
      }
    },
    Submit() {
        this.selectedQuestions.forEach(val => delete val.answers)
      axios
        .post("/assessment/userCreate", this.selectedQuestions)
        .then((res) => {
          console.log(res);
          this.questions = {};
          this.info = {};
        })
        .catch((err) => {
          console.log(err);
          this.questions = {};
          this.info = {};
        });
    },
  },
  created() {
    this.selectedQuestions.push(this.questions[0]);
  },
  data() {
    return {
      updateCompoent: "",
      selectedQuestions: [],
      questions: [
        {
          Title: "Q1",
          questionText:
            "What is your organization’s average reach for one campaign? ",
          answers: [
            {
              answer: "1",
              nextQuestion: "Q2",
            },
            {
              answer: "2",
              nextQuestion: "Q3",
            },
          ],
        },
        {
          Title: "Q2",
          questionText:
            "How many campaigns does your organization run per year? ",
          answers: [
            {
              answer: "3",
              nextQuestion: "Q3",
            },
            {
              answer: "4",
              nextQuestion: "Q4",
            },
          ],
        },
        {
          Title: "Q3",
          questionText: "What is your organization's average transaction size?",
          answers: [
            {
              answer: "5",
              nextQuestion: "Q5",
            },
            {
              answer: "6",
              nextQuestion: "Q6",
            },
          ],
        },
        {
          Title: "Q4",
          questionText: "What is your organization's conversion rate?",
          answers: [
            {
              answer: "f1",
            },
            {
              answer: "f2",
            },
          ],
        },
        {
          Title: "Q5",
          questionText: "What  is your organization's close rate?",
          answers: [
            {
              answer: "f3",
            },
            {
              answer: "f4",
            },
          ],
        },
        {
          Title: "Q6",
          questionText:
            "What is the total estimated advertising and marketing budget?",
          answers: [
            {
              answer: "f5",
            },
            {
              answer: "f6",
            },
          ],
        },
      ],
      e6: 1,
    };
  },
};
</script>
