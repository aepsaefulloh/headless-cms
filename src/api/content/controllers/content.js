'use strict';

/**
 * content controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::content.content',
    ({ strapi }) => ({
        async find(ctx) {
            const entities = await strapi.db.query('api::content.content').findMany({
                populate: ["thumbnail"]
            });

            const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
            return this.transformResponse(sanitizedEntities);
        }
    })
);

