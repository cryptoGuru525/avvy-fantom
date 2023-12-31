import services from 'services'

const records = {
  list: async () => {
    const api = await services.provider.buildAPI()
    return api.fns.RECORDS._LIST
  },
  getStandard: async (name) => {
    const api = await services.provider.buildAPI()
    return api.fns.records[name]
  },
}

export default records
