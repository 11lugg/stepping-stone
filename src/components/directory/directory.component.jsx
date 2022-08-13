import DirectoryItem from "components/directory-item/directory-item.component";

import { DirectoryContainer } from "components/directory/directory.styles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
