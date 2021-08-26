package com.yoterra.hippo.search.requests;

import com.yoterra.data.repos.query.AvroRecordRequest;

public interface SolrRepoRequest<R extends AvroRecordRequest> {

	R toSolrRepoRequest();
}
