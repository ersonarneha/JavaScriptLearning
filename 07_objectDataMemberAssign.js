let sbiBank = {
  bankName: "Bank-State bank of India",
  location: "Branch-Baner,Pune",
  accountNo: "AC No-15423686565",
  ifscCode: "IFSC-SBIN0012345",
  interestRate: "IR-6.9%",
  showDetails: function () {
    console.log(
      this.bankName +
        "," +
        this.location +
        ", " +
        this.accountNo +
        " ," +
        this.ifscCode +
        ", " +
        this.interestRate
    );
  },
};
sbiBank.showDetails();

let axisBank = {
  bankName: "Bank-AXIS BANK",
  location: "Branch-Tilak Road,Akola",
  accountNo: "AC No-35422315565",
  ifscCode: "IFSC-UTIB0004673",
  interestRate: "IR-6.9% to 8%",
  showDetails: function () {
    console.log(
      this.bankName +
        ", " +
        this.location +
        " ," +
        this.accountNo +
        ", " +
        this.ifscCode +
        ", " +
        this.interestRate
    );
  },
};
axisBank.showDetails();

let hdfcBank = {
  bankName: "Bank-HDFC BANK",
  location: "Branch-Seawoods,Navi Mumbai",
  accountNo: "AC No-43622315565",
  ifscCode: "IFSC-HDFC0001028",
  interestRate: "IR-11%",
  showDetails: function () {
    console.log(
      this.bankName +
        ", " +
        this.location +
        " ," +
        this.accountNo +
        " ," +
        this.ifscCode +
        " ," +
        this.interestRate
    );
  },
};
hdfcBank.showDetails();

let yesBank = {
  bankName: "Bank-YES BANK",
  location: "Branch-Cidco Nashik",
  accountNo: "AC No-95722315565",
  ifscCode: "IFSC-YESB0CMSNOC",
  interestRate: "IR-5.75% to 7.50%",
  showDetails: function () {
    console.log(
      this.bankName +
        " ," +
        this.location +
        ", " +
        this.accountNo +
        " ," +
        this.ifscCode +
        ", " +
        this.interestRate
    );
  },
};
yesBank.showDetails();
