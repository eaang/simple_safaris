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
      <div class="contact-form container mx-auto">
        <div class="bg-gray-lightest border-t-4 border-b-4 border-brown">
          <div class="w-1/2 mx-auto py-16">
            <form name="contact">
              <!-- Name -->
              <div class="input-group">
                <label for="name"
                  ><span class="asterisk">&lowast;</span>성함</label
                >
                <input
                  id="name"
                  v-model.lazy="name"
                  type="text"
                  placeholder="홍길동"
                  required
                />
              </div>

              <!-- Phone -->
              <div class="input-group">
                <label for="phone"
                  ><span class="asterisk">&lowast;</span>연락처</label
                >
                <input
                  id="phone"
                  v-model="phone"
                  type="text"
                  placeholder="010-1234-5678"
                  required
                />
              </div>

              <!-- Email -->
              <div class="input-group">
                <label for="email"
                  ><span class="asterisk">&lowast;</span>이메일</label
                >
                <input
                  id="email"
                  v-model="email"
                  type="text"
                  placeholder="이메일 주소 입력"
                  required
                />
              </div>

              <!-- People going -->
              <div class="input-group">
                <label for="people"
                  ><span class="asterisk">&lowast;</span>희망 인원 수</label
                >
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                  <div>
                    <label for="adults"
                      ><div class="small-label">성인</div></label
                    >
                    <select
                      id="adults"
                      v-model="adults"
                      required
                      class="w-full"
                    >
                      <option value="" selected disabled>-</option>
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
                  </div>
                  <div>
                    <label for="children"
                      ><div class="small-label">아동(13세 미만)</div></label
                    >
                    <select
                      id="children"
                      v-model="children"
                      required
                      class="w-full"
                    >
                      >
                      <option value="" selected disabled>-</option>
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
                  </div>
                </div>
              </div>

              <!-- Planned Dates -->
              <div class="input-group">
                <label
                  ><span class="asterisk">&lowast;</span>희망 여행 일자</label
                >
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                  <div class="flex flex-col space-y-2">
                    <div>
                      <div class="small-label">출발</div>
                      <v-date-picker
                        v-model="startDate"
                        color="gray"
                        :input-props="datePickerProps"
                        :popover="{ visibility: 'click' }"
                      />
                    </div>

                    <!-- Single check-group element -->
                    <div>
                      <label
                        for="no-date"
                        class="flex items-center space-x-2"
                        @click="clearDate"
                        ><div class="check-box">
                          <Check v-if="noDate" class="check-mark" />
                        </div>
                        <div class="text-gray-light text-lg">
                          여행일자 미정
                        </div></label
                      ><input
                        id="no-date"
                        v-model="noDate"
                        type="checkbox"
                        class="hidden"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="small-label">도착</div>
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
                  <div class="flex flex-col space-y-2">
                    <label for="days"
                      ><span class="asterisk">&lowast;</span>희망 여행
                      일수</label
                    >
                    <select id="days" v-model="daysDesired" required>
                      <option value="" selected disabled>-</option>
                      <option value="<5">5 일 미만</option>
                      <option value="6-10">6 ~ 10 일</option>
                      <option value=">10">10 일 이상</option>
                    </select>
                  </div>
                  <div class="flex flex-col space-y-2">
                    <label for="budget"
                      ><span class="asterisk">&lowast;</span>1인 여행
                      예산</label
                    >
                    <select id="budget" v-model="budgetPerPerson" required>
                      <option value="" selected disabled>-</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Desired Countries -->
              <div class="input-group">
                <label
                  ><span class="asterisk">&lowast;</span>희망 여행 국가</label
                >
                <div class="grid grid-cols-4 grid-rows-2 gap-y-2">
                  <div v-for="(destination, i) in destinations" :key="i">
                    <label :for="destination.fields.name" class="check-group"
                      ><div class="check-box">
                        <Check
                          v-if="countries.includes(destination.fields.name)"
                          class="check-mark"
                        />
                      </div>
                      <div class="text-black text-lg">
                        {{ destination.fields.koreanName }}
                      </div></label
                    ><input
                      :id="destination.fields.name"
                      v-model="countries"
                      :value="destination.fields.name"
                      type="checkbox"
                      class="hidden"
                    />
                  </div>
                </div>
              </div>

              <!-- Prev experience -->
              <div class="input-group">
                <label>사파리여행에 대한 이해도</label>
                <div class="grid grid-cols-2 grid-rows-2 gap-y-2">
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
                      <div class="text-black text-lg">
                        {{ option }}
                      </div></label
                    >
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
                <div class="grid grid-cols-4 grid-rows-2 gap-y-2">
                  <div v-for="activity in acitivtyOptions" :key="activity">
                    <label :for="activity" class="check-group"
                      ><div class="check-box">
                        <Check
                          v-if="activities.includes(activity)"
                          class="check-mark"
                        />
                      </div>
                      <div class="text-black text-lg">
                        {{ activity }}
                      </div></label
                    ><input
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

              <div class="w-full flex justify-center">
                <Button
                  class="cursor-pointer w-40"
                  classes="btn-big btn-dark-brown"
                  text="Send"
                  @click.native="submitForm"
                />
                {{ submitStatus }}
              </div>
            </form>

            <div class="grid grid-cols-2">
              <div>
                <strong>Values</strong> <br />
                name: {{ name }}<br />
                phone: {{ phone }}<br />
                email: {{ email }}<br />
                adults: {{ adults }} <br />
                children: {{ children }}<br />
                startDate: {{ startDate }} <br />
                endDate: {{ endDate }} | hasDates: {{ hasDates }}<br />
                noDate: {{ noDate }} <br />
                daysDesired: {{ daysDesired }} <br />
                budgetPerPerson: {{ budgetPerPerson }} <br />
                countries: {{ countries }} <br />
                experience: {{ experience }} <br />
                activities: {{ activities }} <br />
                message: {{ message }} <br />
              </div>
              <div>
                <strong>Validations</strong> <br />
                <!-- name: {{ !$v.name.$invalid }}<br />
                phone: {{ !$v.phone.$invalid }}<br />
                email: {{ !$v.email.$invalid }}<br />
                adults: {{ !$v.adults.$invalid }} <br />
                children: {{ !$v.children.$invalid }}<br />
                startDate: {{ !$v.startDate.$invalid }} <br />
                endDate: {{ !$v.endDate.$invalid }} <br />
                noDate: {{ !$v.noDate.$invalid }} <br />
                daysDesired: {{ !$v.daysDesired.$invalid }} <br />
                budgetPerPerson: {{ !$v.budgetPerPerson.$invalid }} <br />
                countries: {{ !$v.countries.$invalid }} <br /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import {
  required,
  requiredUnless,
  email,
  minLength,
  maxLength,
  integer,
} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      continents: this.$store.getters['continents/continents'],
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
        '전혀 모른다',
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
        '추천 요망',
      ],
      datePickerProps: {
        class:
          'rounded-none w-full h-12 border border-gray-lighter text-lg px-4',
        placeholder: '선택',
        style: `background-image: url('/calendar.svg');
          background-repeat: no-repeat;
          background-position: right 0.5em top 50%, 0 0;
          background-size: 1em auto, 100%;`,
      },
    }
  },
  validations: {
    name: {
      required,
    },
    phone: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(15),
    },
    email: {
      required,
      email,
    },
    adults: {
      required,
      integer,
    },
    children: {
      required,
      integer,
    },
    startDate: {
      required: requiredUnless('noDate'),
    },
    endDate: {
      required: requiredUnless('noDate'),
    },
    noDate: {
      required: requiredUnless('hasDates'),
    },
    daysDesired: {
      required,
    },
    budgetPerPerson: {
      required,
    },
    countries: {
      required,
    },
  },
  computed: {
    destinations() {
      const destinations = []
      const continents = []
      this.continents.forEach((continent) => {
        continents.push(continent)
      })
      continents.reverse().forEach((continent) => {
        continent.fields.destinations.forEach((destination) => {
          destinations.push(destination)
        })
      })
      return destinations
    },
    hasDates() {
      return this.startDate !== null || this.endDate !== null
    },
  },
  watch: {
    startDate(newValue, oldValue) {
      if (newValue) {
        this.noDate = false
      }
    },
    endDate(newValue, oldValue) {
      if (newValue) {
        this.noDate = false
      }
    },
  },
  methods: {
    clearDate() {
      this.startDate = null
      this.endDate = null
    },
    submitForm() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.asterisk {
  @apply text-red-500 pr-1;
}
.input-group {
  @apply gap-y-2 mb-8 flex flex-col;
}
label {
  @apply text-xl text-black;
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
}
select {
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
