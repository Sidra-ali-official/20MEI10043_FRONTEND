// src/api/trademarkApi.js
export async function fetchTrademarks({
    input_query,
    sort_by = "default",
    status = [],
    exact_match = false,
    date_query = false,
    owners = [],
    attorneys = [],
    law_firms = [],
    mark_description = [],
    classes = [],
    page = 1,
    rows = 10,
    sort_order = "desc",
    states = [],
    counties = []
  }) {
    try {
      const response = await fetch(`https://schema.getpostman.com/json/collection/v2.1.0/collection.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input_query,
          sort_by,
          status,
          exact_match,
          date_query,
          owners,
          attorneys,
          law_firms,
          mark_description,
          classes,
          page,
          rows,
          sort_order,
          states,
          counties
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.trademarks;
    } catch (error) {
      console.error('Error fetching trademarks:', error);
      throw error;
    }
  }
  