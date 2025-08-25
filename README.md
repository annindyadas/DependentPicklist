
# ⚡ Dependent Picklist LWC for Salesforce
-------------------------------------------------------------------------------------------------------------------------------------------
This Lightning Web Component (LWC) demonstrates how to implement **dependent picklists** using `lightning-combobox` in Salesforce.
It dynamically filters the SubCategory picklist based on the selected Category value, using metadata from the `Account` object.

# 🧩 Features
-------------------------------------------------------------------------------------------------------------------------------------------
- Fetches picklist values for `Category__c` and `SubCategory__c` fields from the `Account` object.
- Dynamically filters SubCategory options based on the selected Category.
- Uses `getObjectInfo` and `getPicklistValues` from `lightning/uiObjectInfoApi`.


## 📄 License
-------------------------------------------------------------------------------------------------------------------------------------------
This project is open-source and available under the MIT License.
