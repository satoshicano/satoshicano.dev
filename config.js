module.exports = {
  extends: ["config:recommended", ":timezone(Asia/Tokyo)"],
  baseBranches: ["develop"],
  packageRules: [
    {
      matchUpdateTypes: ["minor", "patch"],
      matchCurrentVersion: "!/^0/",
      automerge: true,
    },
  ],
  labels: ["dependencies"],
  schedule: ["before 9am"],
  timezone: "Asia/Tokyo",
};
