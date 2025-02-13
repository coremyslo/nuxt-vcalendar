import { defineNuxtPlugin } from '#app'
import { setupCalendar } from '@coremyslo/v-calendar'

export default defineNuxtPlugin((nuxtApp) => {
  const calendarOptions = nuxtApp.$config.public.vcalendar

  nuxtApp.vueApp.use(setupCalendar, calendarOptions || {})
})
