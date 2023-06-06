import axios from 'axios'

import { baseUrl } from '../config'

export const authedUser = {
  state: {
    token: '',
    profile: {},
  },
  reducers: {
    setToken(state, payload) {
      return {
        ...state,
        token: payload
      }
    },
    setProfile(state, payload) {
      return {
        ...state,
        profile: payload
      }
    }
  },
  effects: dispatch => ({
    async asyncSignUp(payload) {
      const response = await axios.post(`${baseUrl}/api/v1/auth/signup`, payload)
      dispatch.authedUser.setToken(response.data.token)
    },
    async asyncSignIn(payload) {
      const response = await axios.post(`${baseUrl}/api/v1/auth/signin`, payload)
      dispatch.authedUser.setToken(response.data.token)
    },
    async asyncFetchProfile() {
      const response = await axios.get(`${baseUrl}/api/v1/profile`)
      dispatch.authedUser.setProfile(response.data)
    },
  })
}

export const events = {
  state: {
    eventList: [],
  },
  reducers: {
    setEventList(state, payload) {
      return {
        ...state,
        eventList: payload,
      }
    },
  },
  effects: dispatch => ({
    async asyncFetchEvents() {
      const response = await axios.get(`${baseUrl}/api/v1/events`)
      dispatch.events.setEventList(response.data)
    },
  }),
}

export const participants = {
  state: {
    participantList: [],
  },
  reducers: {
    setParticipantList(state, payload) {
      return {
        ...state,
        participantList: payload,
      }
    },
  },
  effects: dispatch => ({
    async asyncFetchParticipantsByEvent(payload) {
      const response = await axios.get(`${baseUrl}/api/v1/events/${payload}/participants`)
      dispatch.participants.setParticipantList(response.data)
    },
  }),
}

export const teams = {
  state: {
    teamList: [],
  },
  reducers: {
    setTeamList(state, payload) {
      return {
        ...state,
        teamList: payload,
      }
    },
  },
  effects: dispatch => ({
    async asyncFetchTeamsByEvent(payload) {
      const response = await axios.get(`${baseUrl}/api/v1/teams/by-event/${payload}`)
      dispatch.teams.setTeamList(response.data)
    },
  }),
}





