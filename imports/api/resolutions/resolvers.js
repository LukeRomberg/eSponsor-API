import Resolutions from './resolutions'



export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  },

  Mutation: {
    createResolution(obj, { name }, context){
      console.log('Oooooh we got it!', name)
      const resolutionId = Resolutions.insert({
        name
      })
      return Resolutions.findOne(resolutionId)
    }
  }

}
