function doGet(e) {
  const form = FormApp.openById(e.parameter.id);
  const items = form.getItems();
  const result: Form = {
    id: form.getId(),
    items: [] 
  };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const myItem: QuestionItem = {
      id: item.getId(),
      title: item.getTitle(),
      type: String(item.getType()),
      choices: getChoices(item).map(c => c.getValue())
    };
    result.items.push(myItem);
  }
  return ContentService.createTextOutput(
      JSON.stringify(result)
    ).setMimeType(
      ContentService.MimeType.JSON
    );
}