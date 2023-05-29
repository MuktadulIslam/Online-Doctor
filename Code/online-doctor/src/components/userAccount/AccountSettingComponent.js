import React from 'react'

export default function AccountSettingComponent() {
    return (
        <form>
            <div className="row mb-3">
                <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Email
                    Notifications</label>
                <div className="col-md-8 col-lg-9">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="changesMade"
                             />
                        <label className="form-check-label" htmlFor="changesMade">
                            Changes made to your account
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="newProducts"
                             />
                        <label className="form-check-label" htmlFor="newProducts">
                            Information on new products and services
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="proOffers" />
                        <label className="form-check-label" htmlFor="proOffers">
                            Marketing and promo offers
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="securityNotify"
                             disabled />
                        <label className="form-check-label" htmlFor="securityNotify">
                            Security alerts
                        </label>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button className="btn btn-primary" onClick={() => { }}>Save Changes</button>
            </div>
        </form>
    )
}