import S from "@sanity/desk-tool/structure-builder"

export default () =>
  S.list()
    .title("Content")
    .showIcons(false)
    .items(
      [
        S.listItem()
          .title("Metadata")
          .child(
            S.list()
              .title("Metadata")
              .showIcons(false)
              .items([...S.documentTypeListItems().filter(isMetaData)])
          ),
        ...S.documentTypeListItems().filter(listItem => !isHiddenType(listItem))
      ].sort(sortByName)
    )

const isMetaData = listItem => ["partnerStatus"].includes(listItem.getId())

const isHiddenType = listItem => isMetaData(listItem)

const sortByName = (listItemA, listItemB) => {
  const a = listItemA.getId()
  const b = listItemB.getId()
  if (a > b) {
    return -1
  } else if (a < b) {
    return 1
  }
  return 0
}
