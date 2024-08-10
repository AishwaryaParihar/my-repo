const backendDomain = "https://tlt-project-backend.onrender.com";

const SummaryApi = {
    signUp: {
        url: `${backendDomain}/api/signUp`,
        method: "post",
      },
      signIn: {
        url: `${backendDomain}/api/signIn`,
        method: "post",
      },
      AllUser:{
        url: `${backendDomain}/api/registerUser`,
        method: "get",
      },
      ALlpyPapers:{
        url:`${backendDomain}/api/all-papers`,
        method: "get",
      },
      AllmpcjData:{
       url:`${backendDomain}/api/mpcj-data`,
       method: "get"
      },
      AlltpmData:{
       url:`${backendDomain}/api/tmp-data`,
       method: "get"
      },
      Allmarquee:{
       url:`${backendDomain}/api/marquee`,
       method: "post"
      },

}
export default SummaryApi;