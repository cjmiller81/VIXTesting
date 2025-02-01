export interface VixParameters {
  useVixPrice: boolean;
  useVixGaps: boolean;
  minVixPrice: number;
  maxVixPrice: number;
  minVixOvernightGapUp: number;
  maxVixOvernightGapUp: number;
  minVixOvernightGapDown: number;
  maxVixOvernightGapDown: number;
}

export class VixValidationService {
  calculateVixOvernightGap(vixOpen: number, vixPreviousClose: number): number {
    return (vixOpen - vixPreviousClose) / vixPreviousClose;
  }

  validateVixConditions(
    parameters: VixParameters,
    vixOpen: number,
    vixPreviousClose: number,
    currentVixPrice: number
  ): { isValid: boolean; reason?: string } {
    // Validate VIX price conditions if enabled
    if (parameters.useVixPrice) {
      if (currentVixPrice < parameters.minVixPrice) {
        return { 
          isValid: false, 
          reason: `Current VIX price (${currentVixPrice}) is below minimum (${parameters.minVixPrice})`
        };
      }
      if (currentVixPrice > parameters.maxVixPrice) {
        return { 
          isValid: false, 
          reason: `Current VIX price (${currentVixPrice}) is above maximum (${parameters.maxVixPrice})`
        };
      }
    }

    // Validate gap conditions only if gap validation is enabled
    if (parameters.useVixGaps) {
      const vixOvernightGap = this.calculateVixOvernightGap(vixOpen, vixPreviousClose);
      
      // Handle positive overnight gap (Gap Up)
      if (vixOvernightGap >= 0) {
        if (vixOvernightGap < (parameters.minVixOvernightGapUp / 100)) {
          return { 
            isValid: false, 
            reason: `Gap up (${(vixOvernightGap * 100).toFixed(2)}%) is below minimum (${parameters.minVixOvernightGapUp}%)`
          };
        }
        if (vixOvernightGap > (parameters.maxVixOvernightGapUp / 100)) {
          return { 
            isValid: false, 
            reason: `Gap up (${(vixOvernightGap * 100).toFixed(2)}%) is above maximum (${parameters.maxVixOvernightGapUp}%)`
          };
        }
      }
      // Handle negative overnight gap (Gap Down)
      else {
        const absGap = Math.abs(vixOvernightGap);
        if (absGap < (parameters.minVixOvernightGapDown / 100)) {
          return { 
            isValid: false, 
            reason: `Gap down (${(vixOvernightGap * 100).toFixed(2)}%) is below minimum (${parameters.minVixOvernightGapDown}%)`
          };
        }
        if (absGap > (parameters.maxVixOvernightGapDown / 100)) {
          return { 
            isValid: false, 
            reason: `Gap down (${(vixOvernightGap * 100).toFixed(2)}%) is above maximum (${parameters.maxVixOvernightGapDown}%)`
          };
        }
      }
    }

    return { isValid: true };
  }

  validateParameterConstraints(parameters: VixParameters): { isValid: boolean; reason?: string } {
    // Validate price constraints if price validation is enabled
    if (parameters.useVixPrice) {
      if (parameters.minVixPrice < 0) {
        return { 
          isValid: false, 
          reason: 'Minimum VIX price cannot be negative' 
        };
      }
      if (parameters.minVixPrice >= parameters.maxVixPrice) {
        return { 
          isValid: false, 
          reason: 'Minimum VIX price must be less than maximum VIX price' 
        };
      }
    }

    // Validate gap constraints if gap validation is enabled
    if (parameters.useVixGaps) {
      // Validate gap up constraints
      if (parameters.minVixOvernightGapUp < 0) {
        return { 
          isValid: false, 
          reason: 'Minimum VIX overnight gap up cannot be negative' 
        };
      }
      if (parameters.maxVixOvernightGapUp < 0) {
        return { 
          isValid: false, 
          reason: 'Maximum VIX overnight gap up cannot be negative' 
        };
      }
      if (parameters.minVixOvernightGapUp > parameters.maxVixOvernightGapUp) {
        return { 
          isValid: false, 
          reason: 'Minimum VIX overnight gap up must be less than maximum' 
        };
      }

      // Validate gap down constraints
      if (parameters.minVixOvernightGapDown < 0) {
        return { 
          isValid: false, 
          reason: 'Minimum VIX overnight gap down cannot be negative' 
        };
      }
      if (parameters.maxVixOvernightGapDown < 0) {
        return { 
          isValid: false, 
          reason: 'Maximum VIX overnight gap down cannot be negative' 
        };
      }
      if (parameters.minVixOvernightGapDown > parameters.maxVixOvernightGapDown) {
        return { 
          isValid: false, 
          reason: 'Minimum VIX overnight gap down must be less than maximum' 
        };
      }
    }

    return { isValid: true };
  }
}