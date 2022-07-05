// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Restaurant base")
    .items([
      S.listItem()
        .title("Menu")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Menu")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              ...S.documentTypeListItems().filter((listItem) =>
                ["product", "category"].includes(listItem.getId())
              ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Settings")
        .child(S.document().schemaType("settings").documentId("settings")),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["product", "category", "settings"].includes(listItem.getId())
      ),
    ]);
