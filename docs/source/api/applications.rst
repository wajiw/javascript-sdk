Applications
============

get(applicationId)
^^^^^^^^^^^^^^^^^^

    Retrieve a single application from Persephony.

    :applicationId: {string} The :code:`applicationId` of the desired application.

    :returns: {Promise<object>} Returns a promise that resolves to the application matching the :code:`applicationId` provided.
    :throws: Will throw an error on a failed response.

update(applicationId, options)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    Update the existing application associated with :code:`applicationId`.

    :applicationId: {stirng} The :code:`applicationId` of the desired application.
    :options: {object} The properites to change in the target application.

    :returns: {Promise<object>} Returns a promise that resolves to the application matching the :code:`applicationId` provided.
    :throws: Will throw an error on a failed response.

getList(filters)
^^^^^^^^^^^^^^^^^

    Retrieve a list of applications associated with the :code:`accountId`

    :[filters]: {object} An object containing a number of possible ways to filter the applications.

    :returns: {Promise<object>} Returns a promise that resolves to an application list.
    :throws: Will throw an error on a failed response.

getNextPage(nextPageUri)
^^^^^^^^^^^^^^^^^^^^^^^^

    Retrieve the next page of list results

    :nextPageUri: {string} The URL to the next page of results.

    :returns: {Promise<object>} A promise that resolves to an application list page - the next page of applications.
    :throws: Will throw an error on a failed response.

create(options)
^^^^^^^^^^^^^^^^

    Create a new application through the Persephony API.

    :options: {object} Arguments that can be provided when creating an application. See Persephony documentation for details.

    :returns: {Promise<object>} Returns a promise that resolves to the newly created application.
    :throws: Will throw an error on a failed response.

delete(applicationId)
^^^^^^^^^^^^^^^^^^^^^^

    Delete the application associated with :code:`applicationId`

    :applicationId: {string} The :code:`applicationId` of the application to delete.

    :returns: {Promise<null>} Returns a promise that resolves to null on success.
    :throws: Will throw an error on a failed response.