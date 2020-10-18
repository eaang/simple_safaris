<template>
  <div class="contact-page">
    <!-- Hero section -->
    <div
      class="bg-cover bg-center w-full h-screen flex flex-col items-center justify-end"
      style="background-image: url('/migration.jpg')"
    >
      <div class="flex-grow flex-center pt-16">
        <div class="title-header">Contact us</div>
      </div>
      <div class="w-5/6 sm:w-3/4 bg-white h-48 lg:h-40">
        <div class="relative w-full h-full flex flex-col justify-center">
          <div
            class="flex flex-wrap justify-center gap-x-2 text-xl sm:text-2xl md:text-3xl xl:text-4xl italic p-4"
          >
            <div class="text-center">“아침에 일어날때 한번도 불쾌한</div>
            <div class="text-center">마음이 들지 않았던 그곳...</div>
            <div class="text-center">그곳이 바로 아프리카였다.”</div>
          </div>
        </div>
      </div>
      <div class="w-full bg-white h-forty flex flex-col">
        <div class="text-brown text-xl sm:text-2xl lg:text-3xl text-center">
          소설가 Ernest Hemingway
        </div>
        <div class="w-full flex-grow flex flex-col items-center justify-evenly">
          <div class="w-24 h-1 bg-brown"></div>

          <div class="text-black text-center text-xl md:text-2xl px-8 w-full">
            <div>
              심플사파리에서 당신을 위한 100% 맞춤 사파리 여행을 계획해
              드립니다.
            </div>
            <div>아래 사항들을 기재해 심플사파리에게 보내주세요.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact form here -->
    <client-only>
      <div id="formStart" class="contact-form container mx-auto">
        <div
          class="bg-gray-light bg-opacity-50 border-t-4 border-b-4 border-brown"
        >
          <div class="w-4/5 lg:w-3/5 xl:w-1/2 mx-auto py-16">
            <form name="contact">
              <!-- Name -->
              <div class="input-group">
                <label for="name">
                  <span class="asterisk">&lowast;</span>성함
                </label>
                <input
                  id="name"
                  v-model.trim="name"
                  type="text"
                  placeholder="홍길동"
                  class="form__input"
                />
                <div v-if="$v.name.$dirty">
                  <div v-if="!$v.name.required" class="error">
                    필수 정보입니다.
                  </div>
                </div>
              </div>

              <!-- Phone -->
              <div class="input-group">
                <label for="phone">
                  <span class="asterisk">&lowast;</span>연락처
                </label>
                <input
                  id="phone"
                  v-model.trim="phone"
                  type="text"
                  placeholder="010-1234-5678"
                />
                <div v-if="$v.phone.$dirty">
                  <div v-if="!$v.phone.required" class="error">
                    필수 정보입니다.
                  </div>
                  <div v-if="!$v.phone.minLength" class="error">
                    연락처는 010-1234-5678 형식으로만 입력 가능합니다.
                  </div>
                  <div v-if="!$v.phone.maxLength" class="error">
                    연락처는 010-1234-5678 형식으로만 입력 가능합니다.
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="input-group">
                <label for="email">
                  <span class="asterisk">&lowast;</span>이메일
                </label>
                <input
                  id="email"
                  v-model.trim="email"
                  type="text"
                  placeholder="이메일 주소 입력"
                />
                <div v-if="$v.email.$dirty">
                  <div v-if="!$v.email.required" class="error">
                    필수 정보입니다.
                  </div>
                  <div v-if="!$v.email.email" class="error">
                    잘못된 주소입니다. 다시 입력해주세요.
                  </div>
                </div>
              </div>

              <!-- People going -->
              <div class="input-group">
                <label for="people">
                  <span class="asterisk">&lowast;</span>희망 인원 수
                </label>
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                  <div>
                    <label for="adults">
                      <div class="small-label">성인</div>
                    </label>
                    <select
                      id="adults"
                      v-model="adults"
                      required
                      class="w-full"
                    >
                      <option value selected disabled>-</option>
                      <option :value="1">1</option>
                      <option :value="2">2</option>
                      <option :value="3">3</option>
                      <option :value="4">4</option>
                      <option :value="4">5</option>
                      <option :value="6">6</option>
                      <option :value="7">7</option>
                      <option :value="8">8</option>
                      <option :value="9">9</option>
                    </select>
                    <div v-if="$v.adults.$dirty">
                      <div v-if="!$v.adults.required" class="error">
                        필수 정보입니다.
                      </div>
                    </div>
                  </div>
                  <div>
                    <label for="children">
                      <div class="small-label">아동(13세 미만)</div>
                    </label>
                    <select
                      id="children"
                      v-model="children"
                      required
                      class="w-full"
                    >
                      >
                      <option value selected disabled>-</option>
                      <option :value="0">0</option>
                      <option :value="1">1</option>
                      <option :value="2">2</option>
                      <option :value="3">3</option>
                      <option :value="4">4</option>
                      <option :value="4">5</option>
                      <option :value="6">6</option>
                      <option :value="7">7</option>
                      <option :value="8">8</option>
                      <option :value="9">9</option>
                    </select>
                    <div v-if="$v.children.$dirty">
                      <div v-if="!$v.children.required" class="error">
                        필수 정보입니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Planned Dates -->
              <div class="input-group">
                <label class="">
                  <span class="asterisk">&lowast;</span>희망 여행 일자
                  <span
                    v-if="$v.startDate.$dirty"
                    class="ml-2 inline-flex items-center"
                  >
                    <div
                      v-if="!$v.startDate.required || !$v.endDate.required"
                      class="error pb-3"
                    >
                      필수 정보입니다.
                    </div>
                  </span>
                </label>

                <div class="grid grid-cols-2 grid-rows-1 gap-x-4">
                  <div class="flex flex-col">
                    <div>
                      <div class="flex">
                        <div class="small-label">출발</div>
                        <div
                          v-if="$v.startDate.$dirty"
                          class="ml-2"
                          style="margin-top: 0.2rem"
                        >
                          <div
                            v-if="
                              $v.startDate.required && !$v.startDate.afterToday
                            "
                            class="error"
                          >
                            희망 여행 일자는 현재보다 이후로만 선택 가능합니다.
                          </div>
                        </div>
                      </div>
                      <v-date-picker
                        id="start-datepick"
                        v-model="startDate"
                        color="gray"
                        :input-props="datePickerProps"
                        :popover="{ visibility: 'click' }"
                      />
                    </div>

                    <!-- Single check-group element -->
                    <div class="h-10">
                      <label
                        for="no-date"
                        class="flex items-center mt-2 space-x-2"
                        @click="clearDate"
                      >
                        <div class="check-box">
                          <Check v-if="noDate" class="check-mark" />
                        </div>
                        <div class="text-gray-light text-lg">여행일자 미정</div>
                      </label>
                      <input
                        id="no-date"
                        v-model="noDate"
                        type="checkbox"
                        class="invisible"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="flex">
                      <div class="small-label">도착</div>
                      <div
                        v-if="$v.endDate.$dirty"
                        class="ml-2"
                        style="margin-top: 0.2rem"
                      >
                        <div
                          v-if="$v.endDate.required && !$v.endDate.afterToday"
                          class="error"
                        >
                          희망 여행 일자는 현재보다 이후로만 선택 가능합니다.
                        </div>
                      </div>
                    </div>
                    <v-date-picker
                      v-model="endDate"
                      color="gray"
                      :input-props="datePickerProps"
                      :popover="{ visibility: 'click' }"
                    />
                  </div>
                </div>
              </div>

              <!-- Days and Budget -->
              <div class="input-group">
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                  <div class="flex flex-col">
                    <label for="days">
                      <span class="asterisk">&lowast;</span>희망 여행 일수
                    </label>
                    <select id="days" v-model="daysDesired" required>
                      <option value selected disabled>-</option>
                      <option value="<5">5일 ~ 7일</option>
                      <option value="<5">8일 ~ 10일</option>
                      <option value="<5">11일 ~ 13일</option>
                      <option value="<5">13일 이상</option>
                    </select>
                    <div v-if="$v.daysDesired.$dirty">
                      <div v-if="!$v.daysDesired.required" class="error">
                        필수 정보입니다.
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label for="budget">
                      <span class="asterisk">&lowast;</span>1인 여행 예산
                    </label>
                    <select id="budget" v-model="budgetPerPerson" required>
                      <option value selected disabled>-</option>
                      <option value="1">300만원 ~ 500만원</option>
                      <option value="2">500만원 ~ 700만원</option>
                      <option value="2">700만원 ~ 900만원</option>
                      <option value="3">900만원 이상</option>
                    </select>
                    <div v-if="$v.budgetPerPerson.$dirty">
                      <div v-if="!$v.budgetPerPerson.required" class="error">
                        필수 정보입니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Desired Countries -->
              <div class="input-group">
                <label>
                  <span class="asterisk">&lowast;</span>희망 여행 국가
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-2">
                  <div v-for="(destination, i) in destinations" :key="i">
                    <label :for="destination.name" class="check-group">
                      <div class="check-box">
                        <Check
                          v-if="countries.includes(destination.name)"
                          class="check-mark"
                        />
                      </div>
                      <div class="text-black text-base xl:text-lg">
                        {{ destination.koreanName }}
                      </div>
                    </label>
                    <input
                      :id="destination.name"
                      v-model="countries"
                      :value="destination.name"
                      type="checkbox"
                      class="hidden"
                    />
                  </div>
                </div>
                <div v-if="$v.countries.$dirty">
                  <div v-if="!$v.countries.required" class="error">
                    필수 정보입니다.
                  </div>
                </div>
              </div>

              <!-- Prev experience -->
              <div class="input-group">
                <label>사파리여행에 대한 이해도</label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                  <div v-for="option in experienceOptions" :key="option">
                    <label :for="option" class="flex items-center gap-x-2">
                      <div
                        class="rounded-full h-6 w-6 bg-white border border-gray-lighter flex items-center justify-center"
                      >
                        <div
                          v-if="experience === option"
                          class="rounded-full h-3 w-3 bg-brown"
                        ></div>
                      </div>
                      <div class="text-black text-base xl:text-lg">
                        {{ option }}
                      </div>
                    </label>
                    <input
                      :id="option"
                      v-model="experience"
                      :value="option"
                      type="radio"
                      class="hidden"
                    />
                  </div>
                </div>
              </div>

              <!-- Activities -->
              <div class="input-group">
                <label>희망 여행 활동 선택</label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-2">
                  <div v-for="activity in acitivtyOptions" :key="activity">
                    <label :for="activity" class="check-group">
                      <div class="check-box">
                        <Check
                          v-if="activities.includes(activity)"
                          class="check-mark"
                        />
                      </div>
                      <div class="text-black text-base xl:text-lg">
                        {{ activity }}
                      </div>
                    </label>
                    <input
                      :id="activity"
                      v-model="activities"
                      :value="activity"
                      type="checkbox"
                      class="hidden"
                    />
                  </div>
                </div>
              </div>

              <!-- Message -->
              <div class="input-group">
                <label for="message">사파리여행에서 희망하는 점</label>
                <textarea
                  id="message"
                  v-model="message"
                  class="h-64 border border-gray-lighter text-lg p-4"
                  placeholder="최대한 자세하게 서술해주세요"
                />
              </div>

              <!-- Honeypot -->
              <input
                type="text"
                name="_gotcha"
                class="invisible"
                style="height: 0px"
              />

              <div class="w-full flex justify-center">
                <Button
                  class="cursor-pointer w-40"
                  classes="btn-big btn-dark-brown"
                  text="Send"
                  @click.native="submitForm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import {
  required,
  requiredIf,
  email,
  minLength,
  maxLength,
  integer
} from 'vuelidate/lib/validators'
import { format } from 'date-fns'

const afterToday = (value) => {
  if (value === null) {
    return true
  } else {
    return value > new Date()
  }
}

export default {
  data() {
    return {
      continents: this.$store.getters['continents/continents'],
      destinations: [
        { name: 'Kenya', koreanName: '케냐' },
        { name: 'Tanzania', koreanName: '탄자니아' },
        { name: 'Botswana', koreanName: '보츠와나' },
        { name: 'Namibia', koreanName: '나미비아' },
        { name: 'South Africa', koreanName: '남아프리카' },
        { name: 'Zambia', koreanName: '잠비아' },
        { name: 'Zimbabwe', koreanName: '짐바브웨' },
        { name: 'India', koreanName: '인도' }
      ],
      submitStatus: 'NOT YET',
      name: '',
      phone: '',
      email: '',
      adults: '',
      children: '',
      startDate: null,
      endDate: null,
      noDate: false,
      daysDesired: '',
      budgetPerPerson: '',
      countries: [],
      experience: null,
      activities: [],
      message: '',
      experienceOptions: [
        '해본 적이 있다',
        '지인 중 해본 사람이 있다',
        '개인적으로 리서치는 해보았다',
        '전혀 모른다'
      ],
      acitivtyOptions: [
        '승마 사파리',
        '워킹 사파리',
        '야간 사파리',
        '열기구 탑승',
        '현지문화체험',
        '와인 테이스팅',
        '리버 크루즈',
        '카누',
        '헬리콥터 탑승',
        '프라이빗 사파리',
        '추천 요망'
      ],
      datePickerProps: {
        class:
          'rounded-none w-full h-12 border border-gray-lighter text-lg px-4',
        placeholder: '선택',
        style: `background-image: url('/calendar.svg');
          background-repeat: no-repeat;
          background-position: right 0.5em top 50%, 0 0;
          background-size: 1em auto, 100%;`
      }
    }
  },
  validations: {
    name: {
      required
    },
    phone: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(15)
    },
    email: {
      required,
      email
    },
    adults: {
      required,
      integer
    },
    children: {
      required,
      integer
    },
    startDate: {
      required: requiredIf(function () {
        return this.noDate === false
      }),
      afterToday
    },
    endDate: {
      required: requiredIf(function () {
        return this.noDate === false
      }),
      afterToday
    },
    daysDesired: {
      required
    },
    budgetPerPerson: {
      required
    },
    countries: {
      required
    }
  },
  head() {
    return {
      title: '- Contact us'
    }
  },
  computed: {
    // destinations() {
    //   const destinations = []
    //   const continents = []
    //   this.continents.forEach((continent) => {
    //     continents.push(continent)
    //   })
    //   continents.reverse().forEach((continent) => {
    //     continent.fields.destinations.forEach((destination) => {
    //       destinations.push(destination)
    //     })
    //   })
    //   return destinations
    // },
    hasDates() {
      return this.startDate !== null || this.endDate !== null
    },
    nicerStart() {
      if (this.startDate !== null) {
        return format(this.startDate, 'PP')
      } else {
        return null
      }
    },
    nicerEnd() {
      if (this.endDate !== null) {
        return format(this.endDate, 'PP')
      } else {
        return null
      }
    }
  },
  watch: {
    startDate(newValue) {
      if (newValue) {
        this.noDate = false
      }
    },
    endDate(newValue) {
      if (newValue) {
        this.noDate = false
      }
    }
  },
  methods: {
    clearDate() {
      this.startDate = null
      this.endDate = null
    },
    async submitForm() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        const element = document.getElementById('formStart')
        element.scrollIntoView({
          behavior: 'smooth'
        })
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        await this.$axios
          .$post('https://formspree.io/f/myybznyr', {
            Name: this.name,
            Phone: this.phone,
            Email: this.email,
            Adults: this.adults,
            Children: this.children,
            Start: this.nicerStart,
            End: this.nicerEnd,
            Unsure: this.noDate,
            Length: this.daysDesired,
            Budget: this.budgetPerPerson,
            Countries: this.countries,
            Experience: this.experience,
            Interests: this.activities,
            Message: this.message
          })
          .then(() => {
            this.$router.push('/contact/success')
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.asterisk {
  @apply text-red-500 pr-1;
}
.error {
  @apply text-red-500 text-sm absolute;
}
.input-group {
  @apply mb-12 flex flex-col;
}
label {
  @apply mb-2 text-xl text-black;
}
.small-label {
  @apply text-base text-black pb-2;
}
.check {
  &-group {
    @apply flex items-center gap-x-2;
  }
  &-box {
    @apply h-6 w-6 bg-white border border-gray-lighter flex items-center justify-center;
  }
  &-mark {
    @apply text-brown h-6;
  }
}
input[type='date'],
input[type='text'],
select {
  @apply h-12 border border-gray-lighter text-lg px-4;
}
.toggle {
  background-image: url('/btn-dropdown.svg');
}
select {
  appearance: none;
  background-image: url('/btn-dropdown.svg');
  background-repeat: no-repeat;
  background-position: right 0.5em top 50%, 0 0;
  background-size: 0.7em auto, 100%;
  // The select element is set to required
  // as long as the selected options value
  // is empty the element is not valid.
  &:invalid {
    @apply text-gray-light;
  }

  // Styling for browsers which do support
  // styling select option elements directly
  [disabled] {
    @apply text-gray-light;
  }

  option {
    @apply text-black;
  }

  option:hover {
    @apply text-white;
  }
}

input[type='date'] {
  appearance: none;
  background-image: url('/calendar.svg');
  background-repeat: no-repeat;
  background-position: right 0.5em top 50%, 0 0;
  background-size: 1em auto, 100%;
}

// Removing arrows and stuff
input::-webkit-outer-spin-button, /* Removes arrows */
input::-webkit-inner-spin-button, /* Removes arrows */
input::-webkit-clear-button {
  /* Removes blue cross */
  -webkit-appearance: none;
  margin: 0;
}
</style>
