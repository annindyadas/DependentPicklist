import { LightningElement,wire, api, track  } from 'lwc';

import {getObjectInfo} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {getPicklistValues} from 'lightning/uiObjectInfoApi';
import Category_FIELD from '@salesforce/schema/Account.Category__c';
import SubCategory_FIELD from '@salesforce/schema/Account.SubCategory__c';

export default class Testdependentpicklist extends LightningElement {
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT })
    accountInfo;

    @track categoryOptions;
    @track subCategoryOptions;

    @wire(getPicklistValues, {recordTypeId: '$accountInfo.data.defaultRecordTypeId', fieldApiName: Category_FIELD })
    categoryFieldInfo({ data, error }) {
        if (data) this.categoryOptions = data;
    }
    @wire(getPicklistValues, {recordTypeId:'$accountInfo.data.defaultRecordTypeId', fieldApiName: SubCategory_FIELD })
    subCategoryFieldInfo({ data, error }) {
        if (data) this.subCategoryOptions = data.values;
    }
    handleCategoryChange(event) {
        let key = this.categoryFieldData.controllerValues[event.target.value];
        this.subCategoryOptions = this.subCategoryFieldData.values.filter(opt => opt.validFor.includes(key));
    }
}
