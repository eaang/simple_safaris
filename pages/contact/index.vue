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
            class="flex flex-wrap justify-center gap-x-2 text-2xl sm:text-3xl xl:text-4xl italic p-4"
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
    <div class="contact-form container mx-auto">
      <div class="bg-gray-lightest border-t-4 border-b-4 border-brown">
        <div class="w-1/2 mx-auto py-16">
          <form name="contact">
            <!-- Name -->
            <div class="input-group">
              <label for="name">성함</label>
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
              <label for="phone">연락처</label>
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
              <label for="email">이메일</label>
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
              <label for="people">희망 인원 수</label>
              <div class="grid grid-cols-2 grid-rows-1 gap-4">
                <select id="adults" v-model="adults" required>
                  <option value="" selected disabled>-</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <select id="children" v-model="children" required>
                  <option value="" selected disabled>-</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>

            <!-- Planned Dates -->
            <div class="input-group">
              <label>희망 인원 수</label>
              <div class="grid grid-cols-2 grid-rows-1 gap-4">
                <div class="flex flex-col space-y-2">
                  <input id="start-date" v-model="formStart" type="date" />

                  <!-- Single check-group element -->
                  <div>
                    <label for="no-date" class="flex items-center space-x-2"
                      ><div class="check-box">
                        <fa-icon
                          v-if="noDate"
                          class="check-mark"
                          icon="check"
                        />
                      </div>
                      <div class="text-gray-light text-lg">
                        여행일자 미정
                      </div></label
                    ><input
                      id="no-date"
                      v-model="noDate"
                      type="checkbox"
                      class="invisible"
                    />
                  </div>
                </div>

                <input id="end-date" v-model="formEnd" type="date" />
              </div>
            </div>

            <!-- Days and Budget -->
            <div class="input-group">
              <div class="grid grid-cols-2 grid-rows-1 gap-4">
                <div class="flex flex-col space-y-2">
                  <label for="days">희망 인원 수</label>
                  <select id="days" v-model="daysDesired" required>
                    <option value="" selected disabled>-</option>
                    <option value="<5">5 일 미만</option>
                    <option value="6-10">6 ~ 10 일</option>
                    <option value=">10">10 일 이상</option>
                  </select>
                </div>
                <div class="flex flex-col space-y-2">
                  <label for="budget">1인 여행 예산</label>
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
              <label>희망 여행 국가</label>
              <div class="grid grid-cols-5 grid-rows-1 gap-x-4 gap-y-2">
                <!-- Botswana -->
                <div>
                  <label for="botswana" class="check-group"
                    ><div class="check-box">
                      <fa-icon
                        v-if="countries.botswana"
                        class="check-mark"
                        icon="check"
                      />
                    </div>
                    <div class="text-black text-lg">보츠와나</div></label
                  ><input
                    id="botswana"
                    v-model="countries.botswana"
                    type="checkbox"
                    class="invisible"
                  />
                </div>

                <!-- Kenya -->
                <div>
                  <label for="kenya" class="check-group"
                    ><div class="check-box">
                      <fa-icon
                        v-if="countries.kenya"
                        class="check-mark"
                        icon="check"
                      />
                    </div>
                    <div class="text-black text-lg">케냐</div></label
                  ><input
                    id="kenya"
                    v-model="countries.kenya"
                    type="checkbox"
                    class="invisible"
                  />
                </div>

                <!-- Namibia -->
                <div>
                  <label for="namibia" class="check-group"
                    ><div class="check-box">
                      <fa-icon
                        v-if="countries.namibia"
                        class="check-mark"
                        icon="check"
                      />
                    </div>
                    <div class="text-black text-lg">나미비아</div></label
                  ><input
                    id="namibia"
                    v-model="countries.namibia"
                    type="checkbox"
                    class="invisible"
                  />
                </div>

                <!-- South Africa -->
                <div>
                  <label for="southAfrica" class="check-group"
                    ><div class="check-box">
                      <fa-icon
                        v-if="countries.southAfrica"
                        class="check-mark"
                        icon="check"
                      />
                    </div>
                    <div class="text-black text-lg">남아공</div></label
                  ><input
                    id="southAfrica"
                    v-model="countries.southAfrica"
                    type="checkbox"
                    class="invisible"
                  />
                </div>

                <!-- Tanzania -->
                <div>
                  <label for="tanzania" class="check-group"
                    ><div class="check-box">
                      <fa-icon
                        v-if="countries.tanzania"
                        class="check-mark"
                        icon="check"
                      />
                    </div>
                    <div class="text-black text-lg">탄자니아</div></label
                  ><input
                    id="tanzania"
                    v-model="countries.tanzania"
                    type="checkbox"
                    class="invisible"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parseISO } from 'date-fns'

export default {
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      adults: '',
      children: '',
      formStart: '',
      formEnd: '',
      noDate: null,
      daysDesired: '',
      budgetPerPerson: '',
      countries: {
        botswana: null,
        namibia: null,
        kenya: null,
        southAfrica: null,
        tanzania: null,
      },
    }
  },
  computed: {
    trueStart() {
      return parseISO(this.formStart)
    },
    trueEnd() {
      return parseISO(this.formEnd)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-group {
  @apply gap-y-2 mb-8 flex flex-col;
}
label {
  @apply text-xl text-black;
}
.check {
  &-group {
    @apply flex items-center gap-x-2;
  }
  &-box {
    @apply h-6 w-6 bg-white border border-gray-lighter flex items-center justify-center p-1;
  }
  &-mark {
    @apply text-brown;
  }
}
input[type='date'],
input[type='text'],
select {
  @apply h-12 border border-gray-lighter text-lg px-4;
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
}

input[type='date'] {
  appearance: none;
  background-image: url('/calendar.svg');
  background-repeat: no-repeat;
  background-position: right 0.5em top 50%, 0 0;
  background-size: 1em auto, 100%;
}
</style>
