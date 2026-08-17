/*
    Nodics - Enterprice Micro-Services Management Framework

    Copyright (c) 2026 Nodics All rights reserved.

    This software is governed by the Nodics Source-Available Commercial License.
    You may use, copy, modify, deploy, or distribute it only as permitted by the
    root LICENSE file or a separate written agreement with Nodics.

 */

'use strict';

/** @module kickoffLocal/processServer/data/init/headers/editorial/defaultEditorialProcessDefinitionDataHeader @description Imports Editorial definitions through the Process schema authority. @layer project-data @owner nodics.kickoff */
module.exports = { flowSchema: { defaultEditorialProcessDefinitionData: { options: { enabled: true, schemaName: 'processDefinition', operation: 'saveAll', dataFilePrefix: 'defaultEditorialProcessDefinitionData', userGroups: ['adminGroup'] }, query: { code: '$code' } } } };
