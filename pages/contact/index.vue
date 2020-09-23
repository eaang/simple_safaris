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
      name: {{ name }} <br />
      phone: {{ phone }} <br />
      email: {{ email }} <br />
      adults: {{ adults }} <br />
      children: {{ children }} <br />
      start: {{ trueStart }} | {{ formStart }} <br />
      end: {{ trueEnd }} | {{ formEnd }} <br />
      No Date: {{ noDate }}

      <div class="bg-gray-lightest border-t-4 border-b-4 border-brown h-screen">
        <div class="w-2/5 mx-auto py-16">
          <div class="input-group">
            <label for="name">성함</label>
            <input
              v-model.lazy="name"
              type="text"
              placeholder="홍길동"
              required
            />
          </div>

          <div class="input-group">
            <label for="phone">연락처</label>
            <input
              v-model="phone"
              type="text"
              placeholder="010-1234-5678"
              required
            />
          </div>

          <div class="input-group">
            <label for="email">이메일</label>
            <input
              v-model="email"
              type="text"
              placeholder="이메일 주소 입력"
              required
            />
          </div>

          <div class="input-group">
            <label for="people">희망 인원 수</label>
            <div class="grid grid-cols-2 grid-rows-1 gap-4">
              <select v-model="adults" required>
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
              <select v-model="children" required>
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

          <div class="input-group">
            <label for="dates">희망 인원 수</label>
            <div class="grid grid-cols-2 grid-rows-2 grid-flow-row gap-4">
              <input v-model="formStart" type="date" />
              <input v-model="formEnd" type="date" />
              <div class="text-gray-light flex space-x-2">
                <label for="check-date"
                  ><div class="checkbox">
                    <fa-icon
                      v-if="noDate"
                      class="checkmark"
                      icon="check"
                    /></div></label
                ><input
                  id="check-date"
                  v-model="noDate"
                  type="checkbox"
                  class="hidden"
                />
                <div>여행일자 미정</div>
              </div>
              <div></div>
            </div>
          </div>
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
.checkbox {
  @apply h-6 w-6 bg-white border border-gray-lighter flex items-center justify-center p-1;
}
.checkmark {
  @apply text-brown;
}
input[type='text'],
input[type='date'],
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
