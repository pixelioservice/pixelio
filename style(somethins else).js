// ১. ড্রপডাউন চেঞ্জ হলে ইনপুট বক্স দেখানো বা লুকানোর ফাংশন
function toggleCustomInput() {
  const selectBox = document.getElementById("websiteType");
  const customInputGroup = document.getElementById("customInputGroup");

  if (selectBox.value === "Something else") {
    customInputGroup.style.display = "block";
  } else {
    customInputGroup.style.display = "none";
    document.getElementById("customWebsiteType").value = ""; // অন্য কিছু সিলেক্ট করলে বক্স রিসেট হবে
  }
}

// ২. ফর্ম সাবমিট করার সময় ডেটা প্রসেস করার ফাংশন
function getWebsiteTypeValue() {
  const selectBox = document.getElementById("websiteType");
  const customInput = document.getElementById("customWebsiteType");

  // যদি "Something else" সিলেক্ট করা থাকে এবং ইনপুট বক্সে কিছু লেখা হয়
  if (selectBox.value === "Something else" && customInput.value.trim() !== "") {
    return customInput.value.trim(); // ইউজার যা লিখেছে তা সাবমিট হবে
  }

  return selectBox.value; // অন্যথায় ড্রপডাউনের ভ্যালু (যেমন "Something else" বা অন্য অপশন) সাবমিট হবে
}
// ফোন নাম্বারের বক্সে শুধু নাম্বার এবং '+' ইনপুট নেওয়ার লজিক
document.addEventListener("DOMContentLoaded", function() {
  const phoneInput = document.getElementById("phone");

  if (phoneInput) {
    phoneInput.addEventListener("input", function() {
      // নাম্বার, প্লাস, ড্যাশ এবং স্পেস ছাড়া বাকি সব ক্যারেক্টার রিমুভ করে দেবে
      this.value = this.value.replace(/[^0-9+\-\s]/g, '');
    });
  }
});