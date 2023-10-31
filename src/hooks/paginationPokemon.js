import { ref } from "vue";

export const paginationGlobal = () => {
  const perPage = 20;
  const pageIndex = ref(1);
const data=ref([])
  const btnPage =async (numPage) => {
    try{
        pageIndex.value =await numPage;
    }catch(error){
        console.log(error);
    }
  };

  return {
    data,
    perPage,
    btnPage,
    paginationGlobal,
  };
};
