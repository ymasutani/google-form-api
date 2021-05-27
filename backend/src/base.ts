// ref: https://qiita.com/hand-dot/items/c288d8b32b6243c6cd36

interface QuestionItem {
  id: number;
  title: string;
  type: string;
  choices: string[];
}

interface AnswerItem {
  id: number;
  value: string;
  // valuesはチェックボックスの回答の際に利用
  values: string[];
}

interface Form {
  id: string;
  items: Array<AnswerItem | QuestionItem>;
}

const getItem = item => {
  const itemType = item.getType();
  // フォームの項目は型に応じて適切にキャストする必要あり
  // TODO: 全部の型は現時点で未定義のため、必要に応じて拡充のこと
  // https://developers.google.com/apps-script/reference/forms/item-type
  // https://developers.google.com/apps-script/reference/forms/item

  switch (itemType) {
    case FormApp.ItemType.TEXT:
      return item.asTextItem();
    case FormApp.ItemType.PARAGRAPH_TEXT:
      return item.asParagraphTextItem();
    case FormApp.ItemType.MULTIPLE_CHOICE:
      return item.asMultipleChoiceItem();
    case FormApp.ItemType.LIST:
      return item.asListItem();
    case FormApp.ItemType.CHECKBOX:
      return item.asCheckboxItem();
    default:
      return {};
  }
};

const getChoices = item =>
  getItem(item).getChoices ? getItem(item).getChoices() : [];