import DirectoryItem from "components/directory-item/directory-item.component";

import { DirectoryContainer } from "components/directory/directory.styles";
import { CATEGORIES } from "utils/constants/constants";

const Directory = () => {
  return (
    <DirectoryContainer>
      {CATEGORIES.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
