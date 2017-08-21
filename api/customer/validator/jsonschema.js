// Create contact schema
var createpostschema = {
    type: 'object',
    properties: {
      CompanyName: {
            type: 'string',
            required: true
        },
        SellingDetails: {
                                  type: "object",
                                  required: true,
                                      properties: {
                                              TaxCode: {
                                                type: "object",
                                                required:true,
                                                properties: {
                                                              UID: {
                                                                  type: 'string',
                                                                    required: true
                                                                    }

                                                            }
                                                          },
                                                  FreightTaxCode: {
                                                  type: "object",
                                                  required:true,
                                                    properties: {
                                                                  UID: {
                                                                      type: 'string',
                                                                      required: true
                                                                        }
                                                                  }
                                                              }
                                                      }
}
}
}
//update contact schema\
var createputschema = {
    type: 'object',
    properties: {
      CompanyName: {
            type: 'string',
            required: true
        },
        UID: {
              type: 'string',
              required: true
          },
        RowVersion: {
                type: 'string',
                required: true
            },
        SellingDetails: {
                                  type: "object",
                                  required: true,
                                      properties: {
                                              TaxCode: {
                                                type: "object",
                                                required:true,
                                                properties: {
                                                              UID: {
                                                                  type: 'string',
                                                                    required: true
                                                                    }

                                                            }
                                                          },
                                                  FreightTaxCode: {
                                                  type: "object",
                                                  required:true,
                                                    properties: {
                                                                  UID: {
                                                                      type: 'string',
                                                                      required: true
                                                                        }
                                                                  }
                                                              }
                                                      }
}
}
}

module.exports = {
createpostschema:  createpostschema,
createputschema:  createputschema

};
