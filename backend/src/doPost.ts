function doPost(e) {
  const { id, items }: Form = JSON.parse(e.postData.getDataAsString());
  const form = FormApp.openById(id);

  const formResponse = items
    .map(i =>
      getItem(form.getItemById(i.id)).createResponse(
        //@ts-ignore
        i.value ? i.value : i.values
      )
    )
    // withItemResponseはメソッドチェインする
    // https://developers.google.com/apps-script/reference/forms/form-response#withitemresponseresponse
    .reduce((acc, cur) => acc.withItemResponse(cur), form.createResponse())
    .submit();

    return ContentService.createTextOutput(
        JSON.stringify(
          { id: formResponse.getId() }
        )
      ).setMimeType(ContentService.MimeType.JSON);

}