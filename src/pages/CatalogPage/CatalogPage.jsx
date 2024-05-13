import CatalogList from "../../components/CatalogList/CatalogList";
import SearchForm from "../../components/SearchForm/SearchForm";

function CatalogPage() {
  return (
    <div>
      <SearchForm />
      <CatalogList />
    </div>
  );
}

export default CatalogPage;
