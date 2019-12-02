import {
  GET_CHANNELS,
  SET_MESSAGES
} from './mutation-types'

const getMessagePath = cname => 'https://us-central1-demoapp-1779c.cloudfunctions.net/v1/channels/' + cname + '/messages'

async function fetchGetMessages (cname) {
  const response = await fetch(getMessagePath(cname))
  const json = await response.json()
  return json.messages
}

export default {
  [SET_MESSAGES] ({commit}, message) {
    commit(SET_MESSAGES, message)
  },
  [GET_CHANNELS] ({commit}) {
    fetch('https://us-central1-demoapp-1779c.cloudfunctions.net/v1/channels').then((response) => {
      return response.json()
    }).then((json) => {
      commit(GET_CHANNELS, json.channels)
    })
    async function fetchApi () {
      const response = await fetch('https://us-central1-demoapp-1779c.cloudfunctions.net/v1/channels')
      const json = await response.json()
      commit(GET_CHANNELS, json.channels)
    }
    fetchApi()
  },
  async GET_MESSAGES ({commit}, cname) {
    const messages = await fetchGetMessages(cname)
    commit(SET_MESSAGES, messages)
  },
  async POST_MESSAGES ({commit}, {cname, message}) {
    const response = await fetch(getMessagePath(cname), {
      method: 'POST',
      body: JSON.stringify({
        'body': message
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    if (json.result === 'ok') {
      const messages = await fetchGetMessages(cname)
      commit(SET_MESSAGES, messages)
    }
  }
}
