import i18n from "../i18n";

function EmailErrors(val , flag) {
  const errors = [];
  if (!val.$dirty) return errors;
  !val.email && errors.push("مطلوب بريد إليكترونى صحيح");
  !val.required && errors.push("البريد الإليكتروني مطلوب");
  if (flag) errors.push("هذا البريد مستخدم من قبل مستخدم آخر");
  return errors;
}
function FieldErrors(val) {
  const errors = [];
  if (!val.$dirty) return errors;
  !val.required && errors.push(i18n.t("validation.field.required"));
  !val.minLength && errors.push(i18n.t("validation.field.minLength"));
  !val.maxLength && errors.push(i18n.t("validation.field.maxLength"));
  return errors;
}
function UniqueFieldErrors(val, flag) {
  const errors = [];
  // console.log(flag);
  if (!val.$dirty) return errors;
  !val.required && errors.push(i18n.t("validation.field.required"));
  !val.minLength && errors.push(i18n.t("validation.field.minLength"));
  !val.maxLength && errors.push(i18n.t("validation.field.maxLength"));
  if (flag) errors.push("هذا الرقم مستخدم من قبل");

  return errors;
}
// export feature declared earlier as default
export { EmailErrors, FieldErrors, UniqueFieldErrors };

// // export individual features as default
// export default function () { ... }
// export default class { .. }
