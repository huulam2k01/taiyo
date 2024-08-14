// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Trung Tâm Taiyo")
    .items([
      S.documentTypeListItem("center").title("Trung tâm"),
      S.documentTypeListItem("course").title("Khóa học"),
      S.documentTypeListItem("teacher").title("Giảng viên"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["center", "course", "teacher"].includes(item.getId())
      ),
    ]);
