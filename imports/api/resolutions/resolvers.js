import Resolutions from './resolutions';
import Goals from '../goals/goals';



export default {
  Resolution: {
    goals: (resolution) => {
      return Goals.find({
        resolutionId: resolution._id
      }).fetch()
    }
  },

  Query: {
    resolutions(obj, args, { userId }) {
      return Resolutions.find({
        userId
      }).fetch();
    }
  },

  Mutation: {
    createResolution(obj, { name }, { userId }){
      const resolutionId = Resolutions.insert({
        name,
        userId
      })
      return Resolutions.findOne(resolutionId)
    }
  }

}
