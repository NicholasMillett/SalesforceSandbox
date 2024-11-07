import { LightningElement, track } from 'lwc';

export default class InvestmentStatusComponent extends LightningElement {
    @track name = '';
    @track status = 'New'; // Default status
    @track description = '';
    @track numOfAccounts = 0;

    // Status options for the dropdown
    statusOptions = [
        { label: 'New', value: 'New' },
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' },
        { label: 'Pending', value: 'Pending' }
    ];

    // Handle changes for name, description, and number of accounts
    handleInputChange(event) {
        const field = event.target.label.toLowerCase().replace(/ /g, '');
        this[field] = event.target.value;
    }

    // Handle change for status dropdown
    handleStatusChange(event) {
        this.status = event.target.value;
    }
}
