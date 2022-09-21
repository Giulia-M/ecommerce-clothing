import CategoryItem from '../category-item/category-item.component';

const Directory = ({ categories }) => {

    return (
        <div className="categories-container">
            {categories.map((categ) => (
                <CategoryItem key={categ.id} categoryWrapper={categ} />
            ))}
        </div>
    )
}
export default Directory;