Incoming Numbers
=================

get(incomingNumberId)
^^^^^^^^^^^^^^^^^^^^^^

    Retrieve a single incoming phone number from Persephony.

    :incomingNumberId: {string} The :code:`incomingPhoneNumberId` of the desirect incoming phone number.

    :returns: {Promise<object>} Returns a promise that resolves to the desired number.
    :throws: Will throw an error on a failed response.

update(incomingNumberId, options)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Update the existing incoming phone number associated with the :code:`incomingNumberId`

    :incomingNumberId: {string} The :code:`incomingPhoneNumberId` of the desired incoming phone number.
    :options: {object} The properties to change in the target incoming phone number.

    :returns: {Promise<object>} Returns a promise that resolves to the modified incoming phone number.
    :throws: Will throw an error on a failed response.

getList(filter)
^^^^^^^^^^^^^^^^^^

    Retrieve the list of incoming phone numbers associated with the :code:`accountId`.

    :[filter]: {object} Optional properties to filter the list.

    :returns: {Promise<object>} Returns a promise that resolves to a page of incoming phone numbers.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results.

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to a phone number list - The next page of incoming phone numbers.
    :throws: Will throw an error on a failed response.

purchase(phoneNumber, options)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Purchase a new incoming phone number through the Persephony API.

    :phoneNumber: {string} The phone number to purchase in E.164 format (as returned in the list of Available Phone Numbers)
    :[options]: {object} Optional properties to set on the newly purchased number.

    :returns: {Promise<object>} Returns a promise that resolves to the newly purchased incoming phone number.
    :throws: Will throw an error on a failed response.

delete(incomingNumberId)
^^^^^^^^^^^^^^^^^^^^^^^^^

    Remove the incoming phone number with a matching :code:`incomingPhoneNumberId` as an incoming number. Persephony will no longer answer calls to this number.

    :incomingNumberId: {string} The id of the incoming phone number to delete.

    :returns: {Promise<null>} Returns a promise that resolves to null on success.
    :throws: Will throw an error on a failed response.